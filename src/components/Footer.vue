<template>
   <div class="footer">
        <b-col>
            <b-row class="text-center">
                <b-col>
                    <span class="font-style-show">Contact</span>
                </b-col>
                <b-col cols="8"></b-col>
            </b-row>
            <b-row>
                <b-col class="d-flex flex-row-reverse">
                    <img src="../assets/email.png" class="icon-contact"/>
                </b-col>
                <b-col>
                    <span class="font-style-contact">E-mail</span>
                </b-col>
                <b-col cols="8"></b-col>
            </b-row>
            <b-row>
                <b-col class="d-flex flex-row-reverse">
                    <img src="../assets/facebook.png" class="icon-contact"/>
                </b-col>
                <b-col>
                    <span class="font-style-contact">Facebook</span>
                </b-col>
                <b-col cols="8"></b-col>
            </b-row>
            <b-row>
                <b-col class="d-flex flex-row-reverse">
                    <img src="../assets/twitter.png" class="icon-contact"/>
                </b-col>
                <b-col>
                    <span class="font-style-contact">Twitter</span>
                </b-col>
                <b-col cols="8"></b-col>
            </b-row>
            <b-row>
                <b-col class="d-flex flex-row-reverse">
                    <img src="../assets/github.png" class="icon-contact"/>
                </b-col>
                <b-col>
                    <span class="font-style-contact">Github</span>
                </b-col>
                <b-col cols="8"></b-col>
            </b-row>
        </b-col>
        <b-col class="name-company">
            <span class="font-style-contact">2020 KaphaoGame, Inc. All rights reserved maybe.</span>
        </b-col>
   </div>
</template>

<script>
export default {

}
</script>

<style>
.footer {
    background-color: #212529;
    color: #B8B9BA;
}
.font-style-show {
    font-size: 3.2vw;
    color: #B8B9BA;
}
.name-company {
    text-align: end;
    margin-right: 100vw;
}
.font-style-contact {
    font-size: 2.0vw;
    color: #B8B9BA;
}
.icon-contact {
    width: 3.0vw;
    height: 3.0vw;
}
</style>