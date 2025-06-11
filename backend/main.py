from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import json

app = FastAPI()

# Allow React frontend to access FastAPI backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load mock shipment data
with open("shipments.json") as f:
    shipment_data = json.load(f)

@app.get("/")
def root():
    return {"message": "FastAPI backend is working"}

@app.get("/shipments")
def get_all_shipments():
    return shipment_data

@app.get("/shipments/{shipment_id}")
def get_shipment(shipment_id: str):
    for s in shipment_data:
        if s["id"] == shipment_id:
            return s
    return {"error": "Shipment not found"}
