<template>
    <div>
        <div class="container mt-3">
            <div class="row">
                <div class="col">
                    <p class="h3 text-success fw-bold">Add Contact</p>
                    <p class="fst-italic"> <span class="fw-bold">Manuel d'utilisation, Ajout Contact :</span> Dans cette page l'utilisateur 
                        se doit d'abord de remplir les champs avant de cliquer sur le bouton Add.
                         ce bouton Add va lancer la fonction d'ajout. et le bouton Back
                        ici quand à lui servira de retour à la page d'accueil de l'application Web.
                    </p>
                </div>
            </div>
        </div>
        
        <div class="container mt-3">
            <div class="row">
                <div class="col-md-4">
                    <form @submit.prevent="submitCreate()">
                        <div class="mb-2">
                            <input required v-model="contact.name" type="text" class="form-control" placeholder="Name">
                        </div>
                        <div class="mb-2">
                            <input  required v-model="contact.photo" type="text" class="form-control" placeholder="Photo URL">
                        </div>
                        <div class="mb-2">
                            <input  required v-model="contact.email" type="email" class="form-control" placeholder="Email">
                        </div>
                        <div class="mb-2">
                            <input  required v-model="contact.mobile" type="number" class="form-control" placeholder="Mobile">
                        </div>
                        <div class="mb-2">
                            <input  required v-model="contact.company" type="text" class="form-control" placeholder="Company">
                        </div>
                        <div class="mb-2">
                            <input  required v-model="contact.title" type="text" class="form-control" placeholder="Title">
                        </div>
                        <div class="mb-2">
                            <select required v-model="contact.groupId" class="form-control" v-if="groups.length > 0">
                                <option value="">Select Group</option>
                                <option :value="group.id" v-for="group of groups" :key="group.id">{{ group.name }}</option>
                            </select>
                        </div>

                        
                        <div class="col-md-6">
                            <div class="row">
                                <div class="col mb-2">
                                    <input type="submit" class="btn btn-success" value="Create">
                                </div>
                                <div class="col">
                                    <router-link to="/" class="btn btn-success"><i class="fa fa-arrow-alt-circle-left"></i> Back</router-link>  
                                </div>
                            </div>
                        </div>
                       
                    </form>
                </div>
                <div class="col-md-4">
                    <img :src="contact.photo" alt="photo" class="contact-img">
                </div>
            </div>
        </div>

    </div>
    
</template>

<script>
import {ContactService} from '@/services/ContactService'
export default {
    name : "AddContact",
    data : function (){
        return {
            contact : {
                name : '',
                photo : '',
                email : '',
                mobile : '',
                company : '',
                title : '',
                groupId : ''
            },
            groups : []
        }
    },
    created : async function (){
        try {
            let response = await ContactService.getAllGroups();
            this.groups = response.data;
        } catch (error) {
            console.log(error);
        }
    },
    methods : {
        submitCreate : async function (){
            try {
               let response = await ContactService.createContact(this.contact);
               if(response){
                return this.$router.push('/');
               }
               else{
                return this.$router.push('/contacts/add');
               } 
            } catch (error) {
                console.log(error);
            }
        }
    }
}
</script>

<style scoped>

</style>