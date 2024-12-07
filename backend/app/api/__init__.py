# This file can be empty, or you can add imports that should be available when importing from api package
from .routes import router  # This makes the router available when importing from api

__all__ = ['router']  # This specifies what should be exported when using 'from app.api import *'
