from pydantic import BaseModel, EmailStr
from typing import Optional
from datetime import datetime

class ContactCreate(BaseModel):
    name: str
    organization: Optional[str] = None
    email: EmailStr
    phone: Optional[str] = None
    message: str

class ContactResponse(BaseModel):
    id: int
    name: str
    organization: Optional[str]
    email: EmailStr
    phone: Optional[str]
    message: str
    status: str
    created_at: datetime

    class Config:
        from_attributes = True
