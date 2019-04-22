const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const admin = require('firebase-admin')
admin.initializeApp()

const SENDGRID_API_KEY = functions.config().sendgrid.key

const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(SENDGRID_API_KEY)

exports.firestoreEmail = functions.firestore
    .document('contactos/{contactoId}')
    .onCreate((snap, context)=>{
        const contactoId = snap.id
        const db = admin.firestore()
        console.log(contactoId)
        return db.collection('contactos').doc(contactoId)
            .get()
            .then(doc=>{
                const contacto = doc.data()
                console.log(contacto)
                const msg = {
                    "personalizations": [
                        {
                            "to": [
                                    {
                                    "email": "earanavieyra@gmail.com",
                                    "name": "Enrique Arana Vieyra"
                                    },
                                    {
                                        "email": "martinmelo@actosoft.com.mx",
                                        "name": "Martín Melo Godínez"
                                        }
                            ],
                            "dynamic_template_data": {
                                "nombre": contacto.nombre,
                                "telefono": contacto.telefono,
                                "email": contacto.email,
                                "mensaje": contacto.mensaje
                            },
                        } 
                    ],
                    "from": {
                        "email": "martinmelo@actosoft.com.mx",
                        "name": "Actosoft - Prueba de Correo"
                    },
                    "template_id": "d-488ea8b6b1ae4c17ac54f00d48a263be"
                }
                return sgMail.send(msg)
            })
            .then(()=>console.log("email-sent"))
            .catch((err)=>console.log(err))
            
    })
