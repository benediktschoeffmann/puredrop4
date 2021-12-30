<template>
    <section class="postList">
        <article class="newsPost" 
            v-for="(post, index) in $static.allPost.edges.node"
            v-bind:key="post.id"
            v-bind:index="index"
            v-bind:title="post.title"
        >
            <h1 class="heading" v-html="$post.title" />
            <p v-html="$post.content" />
        </article>
    </section>
</template>

<static-query>
    query {
        allPost (filter: {isNewsPost: {eq: true}}) {
            edges {
            node { 
                id
                title
                content
            }
            }
        }
    }
</static-query>

<script>

</script>

<style>

</style>