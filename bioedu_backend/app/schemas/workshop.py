from pydantic import BaseModel
from typing import List, Optional
from datetime import datetime

class WorkshopEnrollmentCreate(BaseModel):
    w_id: str
    title: str
    date: str
    instructor: str
    description: str
    image: str
    topics: List[str]
    level: str
    duration: str
    price: str
    target_audience: str

class WorkshopEnrollmentResponse(BaseModel):
    enrollment_id: int
    id: int
    w_id: str
    enrollment_date: datetime
    status: str

    class Config:
        orm_mode = True
