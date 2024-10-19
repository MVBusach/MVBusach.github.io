<template>
  <div class="container">
    <section>
      <div class="columns">
        <!--div class="column is-two-thirds">
          <h1>Solicita acceso a nuestros productos</h1>
          <div>
            <div class="field">
              <label class="label"
                >Seleccione cuál herramienta desea probar</label
              >
              <div class="control">
                <div class="select">
                  <select v-model="selectedProject">
                    <option
                      v-for="p in projects"
                      v-bind:key="p.slug"
                      :value="p.slug"
                    >
                      {{ p.name }}
                    </option>
                  </select>
                </div>
              </div>
            </div>
            <div class="field">
              <label class="label" for="name">Nombre</label>
              <div class="control">
                <input
                  v-model.trim="name"
                  class="input"
                  v-bind:class="{ 'is-danger': !validation.name }"
                  maxlength="100"
                  type="text"
                  placeholder="Su nombre completo"
                  id="name"
                  @blur="validName"
                />
              </div>
              <p v-if="!validation.name" class="help is-danger">
                Debe ingresar un nombre válido
              </p>
            </div>
            <div class="field">
              <label class="label" for="">Email de contacto</label>
              <div class="control">
                <input
                  v-model="email"
                  class="input"
                  v-bind:class="{ 'is-danger': !validation.email }"
                  maxlength="50"
                  type="email"
                  placeholder="Su dirección de correo electrónico"
                  @blur="validEmail"
                />
              </div>
              <p v-if="!validation.email" class="help is-danger">
                Debe ingresar una dirección de correo electrónico válida
              </p>
            </div>
            <div class="field super-field">
              <label class="label" for="">Confirmación de email</label>
              <div class="control">
                <input
                  v-model="emailConfirm"
                  class="input"
                  tabindex="-1"
                  maxlength="50"
                  type="email"
                  placeholder="Confirme su dirección de correo electrónico"
                />
              </div>
            </div>
            < <div class="field">
            <label class="label" for="name">Soy</label>
            <div class="control">
            <div class="select">
            <select v-model="form.personType">
                <option value="natural">Una persona natural</option>
                <option value="private">Una empresa privada</option>
                <option value="ONG">Una fundación - ONG</option>
            </select>
            </div>
        </div>
        </div>>

            <div class="field">
              <label class="label" for="">Uso de la herramienta</label>
              <div class="control">
                <textarea
                  v-model="message"
                  class="textarea"
                  v-bind:class="{ 'is-danger': !validation.message }"
                  placeholder="Describa de manera breve el uso que planea darle a la herramienta"
                  maxlength="500"
                  @blur="validMessage"
                ></textarea>
              </div>
              <p v-if="!validation.message" class="help is-danger">
                Debe ingresar una descripción de uso de la aplicación
              </p>
            </div>
            <div
              class="notification is-light"
              v-if="statusMsg"
              v-bind:class="{
                'is-warning': status == 'warning',
                'is-danger': status == 'error',
                'is-success': status == 'success',
              }"
            >
              < is-danger >
              {{ statusMsg }}
            </div>
            <div class="field is-grouped">
              <div class="control">
                <button
                  @click="sendForm"
                  :disabled="isLoading"
                  class="button is-link"
                  v-bind:class="{ 'is-loading': isLoading }"
                >
                  Enviar
                </button>
              </div>
            </div>
          </div>
        </div-->
        <div class="column">
          <h2 style="padding-bottom:5%">Contacto</h2>
          <div class="mb-4"><p>Puedes contactarnos en:</p></div>
          <div class="contact-item">
            <div class="contact-item__icon">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#ico-email" />
              </svg>
            </div>

            <a href="mailto:escuelasmassaludables@gmail.com">escuelasmassaludables@gmail.com</a>
          </div>
          <div class="contact-item">
            <div class="contact-item__icon">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#ico-telephone" />
              </svg>
            </div>
            <a href="tel:+56227180924">(+56 9) 7389 6386</a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import files from "../files.json";

export default {
  head() {
    return {
      title: "Contacto " + process.env.titleBase,
    };
  },
  data() {
    return {
      //selectedProject:this.$route.query.project?this.$route.query.project:files.projects[0].slug,
      selectedProject: null,
      projects: files.modules,
      //tools:files.tools,
      name: "",
      email: "",
      message: "",
      emailConfirm: "",
      form: {},
      validation: {
        name: true,
        email: true,
        message: true,
      },
      statusMsg: null,
      status: null,
      isLoading: false,
      // project:'',
    };
  },
  methods: {
    isValidText: function (inputText, length) {
      inputText = String(inputText);
      if (!inputText) {
        return false;
      }
      if (inputText.length < length) {
        return false;
      }
      return true;
    },
    isValidEmail: function (inputText) {
      var mailformat =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return mailformat.test(String(inputText).toLowerCase());
    },
    validName() {
      if (!this.isValidText(this.name, 2)) {
        this.validation.name = false;
        return false;
      } else {
        this.validation.name = true;
        return true;
      }
    },
    validEmail() {
      if (!this.isValidText(this.email, 4) || !this.isValidEmail(this.email)) {
        this.validation.email = false;
        return false;
      } else {
        this.validation.email = true;
        return true;
      }
    },
    validMessage() {
      if (!this.isValidText(this.message, 5)) {
        this.validation.message = false;
        return false;
      } else {
        this.validation.message = true;
        return true;
      }
    },
    isValidForm: function () {
      let isValid = true;
      //validar nombre
      if (!this.validName()) {
        isValid = false;
      }

      //validar email
      if (!this.validEmail()) {
        isValid = false;
      }

      //validar mensaje
      if (!this.validMessage()) {
        isValid = false;
      }

      return isValid;
    },

    sendForm: async function () {
      this.statusMsg = null;
      this.status = null;
      //validaciones
      let validForm = this.isValidForm();
      if (!validForm) {
        this.status = "warning";
        this.statusMsg = "Han ocurrido errores al completar el formulario";
        return false;
      }

      let form = {};
      form.project = this.selectedProject;
      form.name = this.name;
      form.email = this.email;
      form.message = this.message;
      form.emailConfirm = this.emailConfirm;

      this.isLoading = true;

      let _this = this;

      //setTimeout(function(){ _this.isLoading = false }, 3000);
      try {
        let backendUrl = process.env.backendUrl;
        let response = await this.$axios.post(
          backendUrl + "/api/contact",
          form
        );
        //console.log('response', response.body)
        this.status = "success";
        this.statusMsg = "Su solicitud ha sido enviada con éxito";
      } catch (error) {
        //console.log('error', error)
        this.status = "error";
        this.statusMsg =
          "Ocurrió un error, por favor inténtelo de nuevo en unos instantes";
      } finally {
        this.isLoading = false;
      }
    },
  },
  mounted() {
    //select lee proyectos y herramientas
    //this.projects= this.projects.concat(this.tools)
    let project = this.$route.query.p;
    this.selectedProject = project ? project : files.modules[0].slug;
  },
};
</script>

<style>
</style>