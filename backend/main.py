from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Allow frontend to connect
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Vite dev server
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {"message": "Backend is live"}

@app.get("/shipments")
def get_shipments():
    return [
        {"id": "MAEU123456789", "status": "In Transit", "eta": "2024-07-20"},
    ]