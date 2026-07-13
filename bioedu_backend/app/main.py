from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.routes import auth, contact
from app.db.database import engine, Base

# Create database tables if they don't exist
Base.metadata.create_all(bind=engine)

app = FastAPI(title="BioEdu AI Backend")

# Setup CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # In production, replace with specific origins
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include Routers
app.include_router(auth.router, prefix="/api/auth", tags=["auth"])
app.include_router(contact.router, prefix="/api/contact", tags=["contact"])

@app.get("/")
def read_root():
    return {"message": "Welcome to BioEdu AI API"}
