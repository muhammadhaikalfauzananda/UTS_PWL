from cornice import Service
import json
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from ..models import Film
from pyramid.response import Response

engine = create_engine('mysql+pymysql://root:@localhost:3306/UTS_PWL')
Session = sessionmaker(bind=engine)
session = Session()


layanan_film = Service(
    name='film_service',
    path='/films',
    cors_origins=("*",),
)

@layanan_film.post()
def create_film(request):
    data = request.json_body
    required_fields = ('judul', 'sinopsis', 'tahun', 'genre', 'harga', 'stok')
    if all(data.get(field) for field in required_fields) and all(data.get(field) != "" for field in required_fields):
        film = Film(
            judul=data.get('judul'),
            harga=data.get('harga'),
            stok=data.get('stok'),
            sinopsis=data.get('sinopsis'),
            tahun=data.get('tahun'),
            genre=data.get('genre'),
        )
        request.dbsession.add(film)
        request.dbsession.flush()
        return "berhasil mengirimkan data"
    else:
        return "Gagal mengirimkan data"

@layanan_film.get()
def get_film(request):
    # Deklarasi sesi di database
    session = request.dbsession
    # Mendapatkan data dari database
    all_film = session.query(Film).all()
    # Membuat list data dari semua film
    film_list = [film.to_dict() for film in all_film]
    # Mengubah list tersebut ke format JSON
    film_json = json.dumps(film_list, ensure_ascii=False)
    response = Response(body=film_json, content_type='application/json; charset=utf-8', status=200)
    return response

layanan_film_id = Service(
    name='layanan_film_id',
    path='/films/{id}',
    cors_origins=("*",),
)

@layanan_film_id.delete()
def delete_film(request):
    session = request.dbsession
    id_film = int(request.matchdict['id'])
    film_target = session.query(Film).filter(Film.id == id_film).first()
    if film_target is not None:
        session.delete(film_target)
        return Response("berhasil Menghapus data",status=201)
    else:
        return Response("Data tidak dapat diproses",status=422)
    
@layanan_film_id.put()
def delete_film(request):
    session = request.dbsession
    # mendapatkan id link dari url
    id_film = int(request.matchdict['id'])
    #Mencari data yang sesaui dengan id yang akan diubah
    film_target = session.query(Film).filter(Film.id == id_film).first()
    #data baru yang akan diubah
    data_input = request.json_body
    #kumpulan kolom tabel untuk dilakukan perulangan pada pengecekan
    required_fields = ('judul', 'sinopsis', 'tahun', 'genre', 'harga','stok')
    #memasukan data baru  ke dalam list
    data_baru = []
    #jika data yang ingin diubah ditemukan akan melakukan perulangan pada pengecekan pada data baru
    if film_target is not None:
        for field in required_fields :
            #jika tidak kosong/"" maka akan menyimpan data yang baru 
            if data_input[field] != getattr(film_target,field) and data_input[field] !="":
                data_baru.append(data_input.get(field))
            #jika  kosong/"" maka akan menyimpan data yang lama 
            else:
                data_baru.append(getattr(film_target,field))
        #memasukkan data baru ke databae   
        film_target.judul = data_baru[0]
        film_target.sinopsis = data_baru[1]
        film_target.tahun = data_baru[2]
        film_target.genre = data_baru[3]
        film_target.harga = data_baru[4] 
        film_target.stok = data_baru[5] 
        #Menyelaraskan perubahan data yang ada dalam sesi dengan data yang ada di database
        session.flush()
        #Respon jika berhasil mengubah data
        return Response("berhasil mengubah data",status=201)