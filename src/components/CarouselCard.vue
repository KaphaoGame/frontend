<template v-slot:img>
    <div class="container">
        <div class="row col-12">
            <div class="col-8">
                <img
                    class="d-block img-fluid w-100 bg-image"
                    width="1024"
                    height="480"
                    src="https://wpadmin.gamefever.co/wp-content/uploads/2020/03/final-fantasy-7-remake.jpg"
                    alt="image slot"
                    >
            </div>
            <div class="col-4 d-flex flex-column align-items-stretch bg">
                <div class="example-review d-flex justify-content-center">
                    <span>Latest Users' Reviews</span>
                </div>
                <div>
                    <span>"yahoo"</span>
                </div>
            </div>
        </div>
        

    </div>
</template>

<script>
export default {

}
</script>

<style>
.font-style {
  font-size: 10px;
  color: #E8EAEC;
}
.example-review {
    font-size: 1.5vw;
    color: #E8EAEC;
}
.bg {
    background: #6C757D;
    border-radius: 3%;
}
.bg-image {
    border-radius: 10px;
}
</style>