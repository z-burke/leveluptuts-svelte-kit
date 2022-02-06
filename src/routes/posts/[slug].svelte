<script context="module">
    export async function load({ params }) {
        const post = {
            title: params.slug,
            date: new Date(),
            body: 'lorem ipsum'
        };
        return {
            props: {
                post
            }
        }
    }
</script>

<script>
    import Hello from '../../posts/hello.md';

    export let post;
</script>

<Hello />

<h3>{post.title}</h3>
