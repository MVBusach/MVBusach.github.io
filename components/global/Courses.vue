<template>
  <!-- <div class="container" v-html="post.content.rendered"></div> -->
  <div class="container">
    <section>
      <div class="tabs">
        <ul role="tablist">
          <div v-for="subject in subjects" :key="subject.name">
            <li v-bind:class="{ 'is-active': selectedTab == subject.name }">
              <a
                role="tab"
                :aria-selected="selectedTab == subject.name"
                @click="setTab(subject.name)"
                class="bold-font"
              >
                {{ subject.name }}
              </a>
            </li>
          </div>
        </ul>
      </div>
      <div>
        <ul>
          <div v-for="subject in subjects" :key="subject.name">
            <div v-if="selectedTab == subject.name" class="inner-tabs">
              <ul
                v-for="(courses, index) in subject.courses"
                :key="index"
                class="list-style card"
              >
                <li>
                  <div @click="setCourses(index)" class="card-header is-active" v-if="courseIndex == index">
                    {{ courses.name }}
                  </div>
                  <div @click="setCourses(index)" class="card-header" v-else>
                    {{ courses.name }}
                  </div>
                  <div v-if="courseIndex == index">
                    <ul
                      v-for="link in courses.links"
                      :key="link.name"
                      class="list-style"
                    >
                      <li class="card-item">
                        <div @click="openLink(link.link)">
                          {{ link.name }}
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
import apkCourses from "@/apk-courses.json";
export default {
  data() {
    return {
      subjects: apkCourses.subjects.sort((a, b) =>
        ("" + a.slug).localeCompare(b.slug)
      ),
      selectedTab: null,
      courses: null,
      courseIndex: null,
      previousIndex: null,
      error: [],
    };
  },
  created() {
    this.getCourses();
  },
  methods: {
    setTab: function (type) {
      this.selectedTab = type;
      this.courseIndex = null;
    },
    getCourses() {
      this.selectedTab = this.subjects[0].name;
    },
    setCourses(index) {
      if (this.previousIndex == index) {
        this.courseIndex = null;
        this.previousIndex = null;
      } else {
        this.courseIndex = index;
        this.previousIndex = index;
      }
    },
    openLink(link) {
      window.open(link, "_blank");
    },
  },
  mounted: function () {
   /* let items = document.querySelectorAll(".card-header");
    items.forEach((item) => {
      item.addEventListener("click", () => {
        if (item.classList.contains("is-active")) {
          item.classList.remove("is-active");
        } else {
          items.forEach((item2) => {
            item2.classList.remove("is-active");
          });
          item.classList.toggle("is-active");
        }
      });
    });*/
  },
};
</script>

<style>
</style>
