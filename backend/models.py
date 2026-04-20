from sqlalchemy import Column, Integer, String, Float
from config import db

class Base:
    def to_json(self):
        result = {}
        for column in self.__table__.columns:
            result[column.name] = getattr(self, column.name)
        return result

class GardenData(db.Model, Base):
    __tablename__ = 'data_garden'
    
    id = Column(Integer, primary_key=True)
    hour = Column(Integer, nullable=False)
    decibel = Column(Float, nullable=False)
    light = Column(Float, nullable=False)
    temperature = Column(Float, nullable=False)
    sound_type = Column(String(50), nullable=False)
    scene = Column(String(100), nullable=False)
    
    def __repr__(self):
        return f'<GardenData {self.hour}:00 - {self.sound_type}>'