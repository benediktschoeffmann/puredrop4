<template>
  <Layout>
    <section class="hero is-small">
        <div class="hero-body">
            <p class="title">
                Contact me
            </p>
            <div class="content">
                <b-field label="Name">
                    <b-input />
                </b-field>
                <b-field label="eMail">
                    <b-input maxLength="30" />
                </b-field>            
                <b-field label="Your Message">
                    <b-input maxlength="200" type="textarea"></b-input>
                </b-field>    
            </div>

        </div>
    </section>
    
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Contact me'
  }
}
</script>
