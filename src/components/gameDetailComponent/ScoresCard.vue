<template v-slot:img>
  <b-container id="score-card">
    <br />
    <!-- edit -->

    <b-card-group deck>
      <!-- User Score -->
      <b-card
        border-variant="dark"
        header="User Score"
        header-bg-variant="dark"
        header-text-variant="white"
        align="center"
      >
        <b-card-body>
          <div>
            <div align="center">
              <div id="mock-score2">
                <span>{{ this.finalScore.toFixed(0) }}</span>
              </div>
            </div>
          </div>
        </b-card-body>

        <!-- User 5 type score -->
        <b-card-body>
          <b-row cols="2">
            <b-col>
              <h5>Story</h5>
            </b-col>
            <b-col>
              <b-progress
                :value="this.totalScore.story"
                variant="success"
                striped
                :animated="animate"
              ></b-progress>
            </b-col>
          </b-row>

          <b-row cols="2">
            <b-col>
              <h5>Gameplay</h5>
            </b-col>
            <b-col>
              <b-progress
                :value="this.totalScore.gameplay"
                variant="success"
                striped
                :animated="animate"
              ></b-progress>
            </b-col>
          </b-row>

          <b-row cols="2">
            <b-col>
              <h5>Graphic</h5>
            </b-col>
            <b-col>
              <b-progress
                :value="this.totalScore.graphic"
                variant="success"
                striped
                :animated="animate"
              ></b-progress>
            </b-col>
          </b-row>

          <b-row cols="2">
            <b-col>
              <h5>Performance</h5>
            </b-col>
            <b-col>
              <b-progress
                :value="this.totalScore.performance"
                variant="success"
                striped
                :animated="animate"
              ></b-progress>
            </b-col>
          </b-row>

          <b-row cols="2">
            <b-col>
              <h5>Sound</h5>
            </b-col>
            <b-col>
              <b-progress
                :value="this.totalScore.sound"
                variant="success"
                :animated="animate"
              ></b-progress>
            </b-col>
          </b-row>
        </b-card-body>
      </b-card>

      <!-- Official Score -->
      <b-card
        border-variant="dark"
        header="Official Score"
        header-bg-variant="dark"
        header-text-variant="white"
        align="center"
      >
        <b-card-body>
          <b-col align="center">
            <div id="mock-score2">
              <span>{{ metacritic }}</span>
            </div>
          </b-col>
        </b-card-body>

        <hr />
        <b-card-body>
          <div class="text-left">
            <span>Platform: </span>
            <span v-for="platform in platforms" :key="platform"
              >{{ platform }},
            </span>
          </div>
          <br /><br />
          <div class="text-left">
            <span>Developer: </span>
            <span v-for="developer in developers" :key="developer"
              >{{ developer }}
            </span>
          </div>
        </b-card-body>
      </b-card>
    </b-card-group>

    <!-- edit -->

    <b-row>
      <b-col class="text-align-center">
        <br />
        <div v-if="getUserName !== null">
          <div v-if="commented === false">
            <span>Write your review </span>
            <router-link :to="{ name: 'gamereview', params: { slug: slug } }">
              <img src="../../assets/penIcon.png" class="pen-icon" />
            </router-link>
          </div>
          <div v-else>
            <div v-if="deleteSta === false">
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
                    <b-button @click="commentInfoTmp.story = null"
                      >Clear</b-button
                    >
                  </b-input-group-prepend>
                  <b-form-rating
                    v-model="commentInfoTmp.story"
                    color="#ff8800"
                    stars="10"
                  ></b-form-rating>
                  <b-input-group-append>
                    <b-input-group-text
                      class="justify-content-center"
                      style="min-width: 3em"
                    >
                      {{ commentInfoTmp.story }}
                    </b-input-group-text>
                  </b-input-group-append>
                </b-input-group>
                <br />
                Gameplay Score
                <br />
                <b-input-group>
                  <b-input-group-prepend>
                    <b-button @click="commentInfoTmp.gameplay = null"
                      >Clear</b-button
                    >
                  </b-input-group-prepend>
                  <b-form-rating
                    v-model="commentInfoTmp.gameplay"
                    color="#ff8800"
                    stars="10"
                  ></b-form-rating>
                  <b-input-group-append>
                    <b-input-group-text
                      class="justify-content-center"
                      style="min-width: 3em"
                    >
                      {{ commentInfoTmp.gameplay }}
                    </b-input-group-text>
                  </b-input-group-append>
                </b-input-group>
                <br />
                Graphic Score
                <br />
                <b-input-group>
                  <b-input-group-prepend>
                    <b-button @click="commentInfoTmp.graphic = null"
                      >Clear</b-button
                    >
                  </b-input-group-prepend>
                  <b-form-rating
                    v-model="commentInfoTmp.graphic"
                    color="#ff8800"
                    stars="10"
                  ></b-form-rating>
                  <b-input-group-append>
                    <b-input-group-text
                      class="justify-content-center"
                      style="min-width: 3em"
                    >
                      {{ commentInfoTmp.graphic }}
                    </b-input-group-text>
                  </b-input-group-append>
                </b-input-group>
                <br />
                Performance Score
                <br />
                <b-input-group>
                  <b-input-group-prepend>
                    <b-button @click="commentInfoTmp.performance = null"
                      >Clear</b-button
                    >
                  </b-input-group-prepend>
                  <b-form-rating
                    v-model="commentInfoTmp.performance"
                    color="#ff8800"
                    stars="10"
                  ></b-form-rating>
                  <b-input-group-append>
                    <b-input-group-text
                      class="justify-content-center"
                      style="min-width: 3em"
                    >
                      {{ commentInfoTmp.performance }}
                    </b-input-group-text>
                  </b-input-group-append>
                </b-input-group>
                <br />
                Sound Score
                <br />
                <b-input-group>
                  <b-input-group-prepend>
                    <b-button @click="commentInfoTmp.sound = null"
                      >Clear</b-button
                    >
                  </b-input-group-prepend>
                  <b-form-rating
                    v-model="commentInfoTmp.sound"
                    color="#ff8800"
                    stars="10"
                  ></b-form-rating>
                  <b-input-group-append>
                    <b-input-group-text
                      class="justify-content-center"
                      style="min-width: 3em"
                    >
                      {{ commentInfoTmp.sound }}
                    </b-input-group-text>
                  </b-input-group-append>
                </b-input-group>
                <br />
                <div>
                  Comment
                  <br />
                  <div class="container">
                    <textarea
                      type="text"
                      v-model="commentInfoTmp.comments"
                      class="validate"
                      id="comment-box"
                      placeholder="commentInfoTmp.comments"
                    ></textarea>
                  </div>
                </div>
                <br />
              </b-modal>
              <b-button @click="deleteReview">Delete</b-button>
            </div>
            <div v-else>
              <b-button @click="onCancelDel">Cancel</b-button>
              <b-button @click="onConfirmDel">Confirm</b-button>
            </div>
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
  props: ["title", "metacritic", "platforms", "developers", "slug"],
  data() {
    return {
      animate: true,
      commented: false,
      commentInfo: [],
      commentInfoTmp: [],
      deleteSta: false,
      totalScore: [],
      gameplay: 0,
      sound: 0,
      graphic: 0,
      performance: 0,
      story: 0,
      finalScore: 0,
    };
  },
  computed: {
    ...mapState("account", ["status"]),
    ...mapState("reviewService", ["commentData"]),
    ...mapGetters({
      getUserName: "account/getUserName",
      getCommentData: "reviewService/getCommentData",
    }),
  },
  created() {
    var i = 0;
    this.getCommentData.forEach((comment) => {
      if (comment.username === this.getUserName) {
        this.commented = true;
        this.commentInfo = comment;
      }
      this.story += comment.story;
      this.gameplay += comment.gameplay;
      this.graphic += comment.graphic;
      this.performance += comment.performance;
      this.sound += comment.sound;
      i++;
    });
    this.totalScore = {
      story: (this.story / i) * 10,
      gameplay: (this.gameplay / i) * 10,
      graphic: (this.graphic / i) * 10,
      performance: (this.performance / i) * 10,
      sound: (this.sound / i) * 10,
    };
    this.finalScore =
      (this.totalScore.story +
        this.totalScore.gameplay +
        this.totalScore.graphic +
        this.totalScore.performance +
        this.totalScore.sound) /
      5;
    console.log(this.totalScore);
    this.onCancel();
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
        username: this.commentInfo.username,
      };
    },
    onEditConfirm() {
      const formdata = new FormData();
      formdata.append("gameTag", this.commentInfoTmp.gameTag);
      formdata.append("gameName", this.commentInfoTmp.gameName);
      formdata.append("username", this.commentInfoTmp.username);
      formdata.append("story", this.commentInfoTmp.story);
      formdata.append("gameplay", this.commentInfoTmp.gameplay);
      formdata.append("sound", this.commentInfoTmp.sound);
      formdata.append("graphic", this.commentInfoTmp.graphic);
      formdata.append("performance", this.commentInfoTmp.performance);
      formdata.append("comments", this.commentInfoTmp.comments);

      reviewService.createReview(formdata);
      // window.location.reload()
    },
    deleteReview() {
      this.deleteSta = true;
    },
    onCancelDel() {
      this.deleteSta = false;
    },
    onConfirmDel() {
      var strTmp = this.commentInfo.gameTag + "_" + this.commentInfo.username;
      reviewService.deleteReview(strTmp);
      window.location.reload();
    },
  },
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
  width: 100%;
}
</style>