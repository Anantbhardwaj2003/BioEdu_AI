from fastapi import APIRouter, Depends, status
from sqlalchemy.orm import Session
from app.db.database import get_db
from app.db.models import ContactMessage
from app.schemas.contact import ContactCreate, ContactResponse

router = APIRouter()

@router.post("/", response_model=ContactResponse, status_code=status.HTTP_201_CREATED)
def create_contact_message(contact: ContactCreate, db: Session = Depends(get_db)):
    new_message = ContactMessage(
        name=contact.name,
        organization=contact.organization,
        email=contact.email,
        phone=contact.phone,
        message=contact.message,
        status="pending"
    )
    db.add(new_message)
    db.commit()
    db.refresh(new_message)
    return new_message
