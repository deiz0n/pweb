from flask_restful import Resource, reqparse
from model.models import db, Tutor, Pet, TutorSchema, PetsSchema

class TutorResource(Resource):
    def get(self, tutor_id=None):
        if tutor_id is None:
            tutors = Tutor.query.all()
            return TutorSchema(many=True).dump(tutors), 200
        
        tutor = Tutor.query.get(tutor_id)
        if tutor is not None:
            return TutorSchema().dump(tutor), 200
        return 'Not found', 404
        
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
            db.session.delete(tutor)
            db.session.commit()
            return '', 204
        return 'Not found', 404
    
    def put(self, tutor_id=None):
        parser = reqparse.RequestParser()
        parser.add_argument('nome_tutor', type=str, required=True)
        args = parser.parse_args()
        tutor = Tutor.query.get(tutor_id)
        
        if tutor is not None:
            tutor.nome = args['nome_tutor']
            db.session.commit()
            return TutorSchema().dump(tutor), 200
        return 'Not found', 404
        
    
class PetResource(Resource):
    def get(self, pet_id=None):
        if pet_id is None:
            pets = Pet.query.all()
            return PetsSchema(many=True).dump(pets), 200
        
        pet = Pet.query.get(pet_id)
        return PetsSchema().dump(pet), 200
    
    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument('nome_tutor', type=str, required=True)
        args = parser.parse_args()
        pet = Pet(nome=args['nome_pet'])
        db.session.add(pet)
        db.session.commit()
        return PetsSchema().dump(pet), 200
    
    def delete(self, pet_id):
        pet = Tutor.query.get(pet_id)
        db.session.delete(pet)
        db.session.commit()
        return '', 204