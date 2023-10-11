from flask_restful import Resource, reqparse
from flask_sqlalchemy import SQLAlchemy
from model.models import db, Tutor, Pet, TutorSchema, PetsSchema, TutorWithPetsSchema

class TutorResource(Resource):
    def get(self, tutor_id=None):
        if tutor_id is None:
            tutors = Tutor.query.all()
            return TutorSchema(many=True).dump(tutors), 200
        
        tutor = Tutor.query.get(tutor_id)
        if tutor is not None:
            tutor_schema = TutorWithPetsSchema()
            return tutor_schema.dump(tutor), 200
        return 'Resource Not Found', 404
        
    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument('nome_tutor', type=str, required=True)
        args = parser.parse_args()
        tutor = Tutor(nome=args['nome_tutor'])
        db.session.add(tutor)
        db.session.commit()
        return TutorSchema().dump(tutor), 201
    
    def delete(self, tutor_id=None):
        tutor = Tutor.query.get(tutor_id)
        if tutor is not None:
            try:
                db.session.delete(tutor)
                db.session.commit()
                return 'Resource Delete', 204
            except Exception:
                return 'Resource In Use', 409
        return 'Resource Not Found', 404
    
    def put(self, tutor_id=None):
        parser = reqparse.RequestParser()
        parser.add_argument('nome_tutor', type=str, required=True)
        args = parser.parse_args()
        tutor = Tutor.query.get(tutor_id)
        
        if tutor is not None:
            tutor.nome = args['nome_tutor']
            db.session.commit()
            return TutorSchema().dump(tutor), 200
        return 'Resource Not Found', 404
        
    
class PetResource(Resource):
    def get(self, pet_id=None):
        if pet_id is None:
            pets = Pet.query.all()
            return PetsSchema(many=True).dump(pets), 200
        
        pet = Pet.query.get(pet_id)
        if pet is not None:
            return PetsSchema().dump(pet), 200
        return 'Resource Not Found', 404
    
    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument('nome_pet', type=str, required=True)
        parser.add_argument('tutor_id', type=int, required=True)
        args = parser.parse_args()
        pet = Pet(nome=args['nome_pet'], tutor_id=args['tutor_id'])
        db.session.add(pet)
        db.session.commit()
        return PetsSchema().dump(pet), 200
    
    def delete(self, pet_id=None):
        pet = Tutor.query.get(pet_id)
        if pet is not None:
            try: 
                db.session.delete(pet)
                db.session.commit()
                return 'Resource Delete', 204
            except Exception:
                return 'Resource In Use', 409
        return 'Resource Not Found', 404
    
    def put(self, pet_id=None):
        parser = reqparse.RequestParser()
        parser.add_argument('nome_pet', type=str, required=True)
        parser.add_argument('tutor_id', type=int, required=True)
        args = parser.parse_args()
        pet = Pet.query.get(pet_id)
        
        if pet is not None:
            pet.nome = args['none_pet']
            pet.tutor_id = args['tutor_id']
            db.session.commit()
            return PetsSchema().dump(pet), 200
        return 'Resource Not Found', 404