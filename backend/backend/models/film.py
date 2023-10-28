from sqlalchemy import (
    Column,
    Integer,
    Text,
    String,
    BLOB
)
from sqlalchemy.orm import relationship

from .meta import Base

class Film(Base):
    __tablename__ = 'film'
    
    id = Column(Integer, primary_key=True)
    judul = Column(String, nullable=False)
    harga = Column(Integer, nullable=False)
    stok = Column(Integer, nullable=False)
    gambar = Column(BLOB, nullable=False)
    sinopsis = Column(Text, nullable=False)
    tahun = Column(Integer, nullable=False)
    genre = Column(String(255), nullable=False)


    def to_dict(self):
        return {
            "id": self.id,
            "judul": self.judul,
            "harga": self.harga,
            "stok": self.stok,
            "sinopsis": self.sinopsis,
            "tahun": self.tahun,
            "genre": self.genre,
        }

