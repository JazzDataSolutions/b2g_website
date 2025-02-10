# backend/app/services/product_service.py
from sqlmodel import Session, select
from app.models import Producto
import uuid

class ProductService:
    def __init__(self, session: Session):
        self.session = session

    def listar(self) -> list[Producto]:
        return self.session.exec(select(Producto)).all()

    def crear(self, producto: Producto) -> Producto:
        self.session.add(producto)
        self.session.commit()
        self.session.refresh(producto)
        return producto

    def obtener(self, producto_id: uuid.UUID) -> Producto:
        producto = self.session.get(Producto, producto_id)
        if not producto:
            raise ValueError("Producto no encontrado")
        return producto

    def actualizar(self, producto_id: uuid.UUID, datos: Producto) -> Producto:
        producto = self.obtener(producto_id)
        producto.nombre = datos.nombre
        producto.descripcion = datos.descripcion
        producto.precio = datos.precio
        producto.stock = datos.stock
        producto.imagen_url = datos.imagen_url
        self.session.add(producto)
        self.session.commit()
        self.session.refresh(producto)
        return producto

    def eliminar(self, producto_id: uuid.UUID) -> None:
        producto = self.obtener(producto_id)
        self.session.delete(producto)
        self.session.commit()
