<template v-slot:img>
  <b-container id="score-card">
    <b-row>
      <b-col class="text-align-center">
        <span id="font-style">User Score</span>
        <div align="center">
          <div id="mock-score2">
            <span>85</span>
          </div>
        </div>
        <b-col class="d-flex flex-column-reverse">
          <div>
            <b-progress
              :value="100"
              variant="success"
              striped
              :animated="animate"
              class="mt-4"
            ></b-progress>
            <hr />
            <b-progress
              :value="25"
              variant="success"
              striped
              :animated="animate"
              class="mt-4"
            ></b-progress>
            <hr />
            <b-progress
              :value="50"
              variant="info"
              striped
              :animated="animate"
              class="mt-4"
            ></b-progress>
            <hr />
            <b-progress
              :value="75"
              variant="warning"
              striped
              :animated="animate"
              class="mt-4"
            ></b-progress>
            <hr />
            <b-progress
              :value="100"
              variant="danger"
              :animated="animate"
              class="mt-4"
            ></b-progress>
            <hr />
          </div>
        </b-col>
        <div>
          <span>Platform: </span>
          <span v-for="platform in platforms" :key="platform"
            >{{ platform }},
          </span>
        </div>
        <br /><br />
        <div>
          <span>Developer: </span>
          <span v-for="developer in developers" :key="developer"
            >{{ developer }}
          </span>
        </div>
      </b-col>

      <b-col class="text-align-center">
        <br /><br /><br /><br /><br /><br />
        <span>Story</span>
        <br />
        <hr />
        <span>Gameplay</span>
        <br />
        <hr />
        <span>Graphics</span>
        <br />
        <hr />
        <span>Performance</span>
        <br />
        <hr />
        <span>Sound</span>
        <br />
        <hr />
      </b-col>

      <b-col class="text-align-center">
        <span id="font-style">Official Score</span>
        <b-col align="center">
          <div id="mock-score2">
            <span>{{ metacritic }}</span>
          </div>
        </b-col>
        <b-col class="d-flex flex-column-reverse">
          <div>
            <b-progress
              :value="100"
              variant="success"
              striped
              :animated="animate"
              class="mt-4"
            ></b-progress>
            <hr />
            <b-progress
              :value="25"
              variant="success"
              striped
              :animated="animate"
              class="mt-4"
            ></b-progress>
            <hr />
            <b-progress
              :value="50"
              variant="info"
              striped
              :animated="animate"
              class="mt-4"
            ></b-progress>
            <hr />
            <b-progress
              :value="75"
              variant="warning"
              striped
              :animated="animate"
              class="mt-4"
            ></b-progress>
            <hr />
            <b-progress
              :value="100"
              variant="danger"
              :animated="animate"
              class="mt-4"
            ></b-progress>
            <hr />
          </div>
        </b-col>
        <br /><br />
        <div v-if="getUserName !== null">
          <div v-if="commented === false">
            <span>Write your review </span>
            <router-link :to="{ name: 'gamereview', params: { slug: slug } }">
              <img src="../../assets/penIcon.png" class="pen-icon" />
            </router-link>
          </div>
          <div v-else>
            <b-button 
            variant="warning"
            id="edit-com-btn"
            contain
            v-b-modal.modal-edit
            >
              Edit Your Review
            </b-button>
            <b-modal
            id="modal-edit"
            title="Edit Your Review"
            @cancel="onCancel"
            @ok="onEditConfirm"
            >
              Story Score
              <br />
              <b-input-group>
                <b-input-group-prepend>
                  <b-button @click="commentInfoTmp.story = null">Clear</b-button>
                </b-input-group-prepend>
                <b-form-rating v-model="commentInfoTmp.story" color="#ff8800" stars="10"></b-form-rating>
                <b-input-group-append>
                  <b-input-group-text class="justify-content-center" style="min-width: 3em;">
                    {{ commentInfoTmp.story }}
                  </b-input-group-text>
                </b-input-group-append>
              </b-input-group>
              <br />
              Gameplay Score
              <br />
              <b-input-group>
                <b-input-group-prepend>
                  <b-button @click="commentInfoTmp.gameplay = null">Clear</b-button>
                </b-input-group-prepend>
                <b-form-rating v-model="commentInfoTmp.gameplay" color="#ff8800" stars="10"></b-form-rating>
                <b-input-group-append>
                  <b-input-group-text class="justify-content-center" style="min-width: 3em;">
                    {{ commentInfoTmp.gameplay }}
                  </b-input-group-text>
                </b-input-group-append>
              </b-input-group>
              <br />
              Graphic Score
              <br />
              <b-input-group>
                <b-input-group-prepend>
                  <b-button @click="commentInfoTmp.graphic = null">Clear</b-button>
                </b-input-group-prepend>
                <b-form-rating v-model="commentInfoTmp.graphic" color="#ff8800" stars="10"></b-form-rating>
                <b-input-group-append>
                  <b-input-group-text class="justify-content-center" style="min-width: 3em;">
                    {{ commentInfoTmp.graphic }}
                  </b-input-group-text>
                </b-input-group-append>
              </b-input-group>
              <br />
              Performance Score
              <br />
              <b-input-group>
                <b-input-group-prepend>
                  <b-button @click="commentInfoTmp.performance = null">Clear</b-button>
                </b-input-group-prepend>
                <b-form-rating v-model="commentInfoTmp.performance" color="#ff8800" stars="10"></b-form-rating>
                <b-input-group-append>
                  <b-input-group-text class="justify-content-center" style="min-width: 3em;">
                    {{ commentInfoTmp.performance }}
                  </b-input-group-text>
                </b-input-group-append>
              </b-input-group>
              <br />
              Sound Score
              <br />
              <b-input-group>
                <b-input-group-prepend>
                  <b-button @click="commentInfoTmp.sound = null">Clear</b-button>
                </b-input-group-prepend>
                <b-form-rating v-model="commentInfoTmp.sound" color="#ff8800" stars="10"></b-form-rating>
                <b-input-group-append>
                  <b-input-group-text class="justify-content-center" style="min-width: 3em;">
                    {{ commentInfoTmp.sound }}
                  </b-input-group-text>
                </b-input-group-append>
              </b-input-group>
              <br />
              <div>
                Comment
                <br/>
                <textarea type="text" v-model="commentInfoTmp.comments" class="validate" id="comment-box" placeholder="commentInfoTmp.comments"></textarea>
              </div>
              <br />
            </b-modal>
          </div>
        </div>
      </b-col>
    </b-row>
    <br />
  </b-container>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import ReviewServiceAPI from "@/api/ReviewServiceAPI";

const reviewService = new ReviewServiceAPI();

export default {
  props: ["title", "metacritic", "platforms", "developers", "slug", "getCommentData"],
  data() {
    return {
      animate: true,
      commented: false,
      commentInfo: [],
      commentInfoTmp: [],
    }
  },
  computed: {
    ...mapState("account", ["status"]),
    ...mapGetters({
      getUserName: "account/getUserName",
    })
  },
  created() {
    this.getCommentData.forEach(comment => {
      if(comment.username === this.getUserName) {
        this.commented = true;
        this.commentInfo = comment;
      }
    });
    this.commentInfoTmp = {
      comments: this.commentInfo.comments,
      gameName: this.commentInfo.gameName,
      gameTag: this.commentInfo.gameTag,
      gameplay: this.commentInfo.gameplay,
      graphic: this.commentInfo.graphic,
      performance: this.commentInfo.performance,
      sound: this.commentInfo.sound,
      story: this.commentInfo.story,
      username: this.commentInfo.username
    };
    // console.log(this.commentInfo);
    // console.log(this.commentInfoTmp);
  },
  methods: {
    onCancel() {
      this.commentInfoTmp = {
        comments: this.commentInfo.comments,
        gameName: this.commentInfo.gameName,
        gameTag: this.commentInfo.gameTag,
        gameplay: this.commentInfo.gameplay,
        graphic: this.commentInfo.graphic,
        performance: this.commentInfo.performance,
        sound: this.commentInfo.sound,
        story: this.commentInfo.story,
        username: this.commentInfo.username
      };
    },
    onEditConfirm() {
      const formdata = new FormData()
      formdata.append("gameTag", this.commentInfoTmp.gameTag)
      formdata.append("gameName", this.commentInfoTmp.gameName)
      formdata.append("username", this.commentInfoTmp.username)
      formdata.append("story", this.commentInfoTmp.story)
      formdata.append("gameplay", this.commentInfoTmp.gameplay)
      formdata.append("sound", this.commentInfoTmp.sound)
      formdata.append("graphic", this.commentInfoTmp.graphic)
      formdata.append("performance", this.commentInfoTmp.performance)
      formdata.append("comments", this.commentInfoTmp.comments)

      const check = reviewService.editReview(formdata)
      console.log(check)
    }
  }
};
</script>

<style>
#font-style {
  font-size: 2vw;
}
#score-card {
  background: #b3c0ca;
  border-radius: 10px;
}
#mock-score2 {
  font-size: 4vw;
  color: #e9ecef;
  background: #18850c;
  border-radius: 7px;
}
.pen-icon {
  width: 2vw;
  height: 2vw;
}
#comment-box {
  width: 34vw;
}
</style>