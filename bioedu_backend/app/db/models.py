from sqlalchemy import Column, String, Boolean, DateTime, Integer, BigInteger, ForeignKey, Text, UniqueConstraint
from sqlalchemy.dialects.postgresql import ARRAY
from app.db.database import Base
from datetime import datetime, timezone

class User(Base):
    __tablename__ = "users"

    id = Column(BigInteger, primary_key=True, index=True)
    email = Column(String, unique=True, index=True, nullable=False)
    password_hash = Column(String, nullable=False)
    is_email_verified = Column(Boolean, default=False)
    is_active = Column(Boolean, default=True)
    last_login_at = Column(DateTime(timezone=True), nullable=True)
    failed_login_attempts = Column(Integer, default=0)
    locked_until = Column(DateTime(timezone=True), nullable=True)
    password_changed_at = Column(DateTime(timezone=True), nullable=True)
    created_at = Column(DateTime(timezone=True), default=lambda: datetime.now(timezone.utc))
    updated_at = Column(DateTime(timezone=True), default=lambda: datetime.now(timezone.utc), onupdate=lambda: datetime.now(timezone.utc))

class ContactMessage(Base):
    __tablename__ = "contact_messages"

    id = Column(BigInteger, primary_key=True, index=True)
    name = Column(String, nullable=False)
    organization = Column(String, nullable=True)
    email = Column(String, nullable=False)
    phone = Column(String, nullable=True)
    message = Column(String, nullable=False)
    status = Column(String, default="pending")
    created_at = Column(DateTime(timezone=True), default=lambda: datetime.now(timezone.utc))
    updated_at = Column(DateTime(timezone=True), default=lambda: datetime.now(timezone.utc), onupdate=lambda: datetime.now(timezone.utc))

class Workshop(Base):
    __tablename__ = "workshops"

    w_id = Column(String, primary_key=True, index=True)
    title = Column(String, nullable=False)
    date = Column(String)
    instructor = Column(String)
    description = Column(Text)
    image = Column(Text)
    topics = Column(ARRAY(String))
    level = Column(String)
    duration = Column(String)
    price = Column(String)
    target_audience = Column(Text)
    created_at = Column(DateTime(timezone=True), default=lambda: datetime.now(timezone.utc))

class WorkshopEnrollment(Base):
    __tablename__ = "workshop_enrollments"

    enrollment_id = Column(BigInteger, primary_key=True, index=True, autoincrement=True)
    id = Column(BigInteger, ForeignKey("users.id", ondelete="CASCADE"), nullable=False)
    w_id = Column(String, ForeignKey("workshops.w_id", ondelete="CASCADE"), nullable=False)
    enrollment_date = Column(DateTime(timezone=True), default=lambda: datetime.now(timezone.utc))
    status = Column(String, default="Enrolled")

    __table_args__ = (
        UniqueConstraint('id', 'w_id', name='uq_user_workshop'),
    )
