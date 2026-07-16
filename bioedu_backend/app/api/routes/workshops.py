from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from app.db.database import get_db
from app.db.models import User, WorkshopEnrollment, Workshop
from app.api.deps import get_current_user
from app.schemas.workshop import WorkshopEnrollmentCreate, WorkshopEnrollmentResponse
from sqlalchemy.exc import IntegrityError

router = APIRouter()

@router.post("/enroll", response_model=WorkshopEnrollmentResponse)
def enroll_workshop(
    enrollment: WorkshopEnrollmentCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    # Check if the workshop exists in the database
    existing_workshop = db.query(Workshop).filter(Workshop.w_id == enrollment.w_id).first()
    
    # If not, create it dynamically from the frontend data
    if not existing_workshop:
        new_workshop = Workshop(
            w_id=enrollment.w_id,
            title=enrollment.title,
            date=enrollment.date,
            instructor=enrollment.instructor,
            description=enrollment.description,
            image=enrollment.image,
            topics=enrollment.topics,
            level=enrollment.level,
            duration=enrollment.duration,
            price=enrollment.price,
            target_audience=enrollment.target_audience
        )
        db.add(new_workshop)
        # Commit to ensure the workshop is created before adding the enrollment
        try:
            db.commit()
            db.refresh(new_workshop)
        except IntegrityError:
            db.rollback()
            raise HTTPException(status_code=400, detail="Error creating workshop")
    
    existing_enrollment = db.query(WorkshopEnrollment).filter(
        WorkshopEnrollment.id == current_user.id,
        WorkshopEnrollment.w_id == enrollment.w_id
    ).first()

    if existing_enrollment:
        raise HTTPException(status_code=400, detail="Already enrolled in this workshop")

    new_enrollment = WorkshopEnrollment(
        id=current_user.id,
        w_id=enrollment.w_id
    )

    db.add(new_enrollment)
    try:
        db.commit()
        db.refresh(new_enrollment)
    except IntegrityError:
        db.rollback()
        raise HTTPException(status_code=400, detail="Error enrolling, possibly workshop ID does not exist in DB")

    return new_enrollment
