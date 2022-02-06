<script context="module">
    export async function load({ params }) {
        const Hello = (await import(`../../posts/${params.slug}.md`));
        // console.log('Hello', Hello);
        return {
            props: {
                Hello: Hello.default,
                title: Hello.metadata.title
            }
        }
    }
</script>

<script>
    // import Hello from '../../posts/hello.md';
    export let Hello;
    export let title;
</script>

<h2>{title}</h2>

<Hello />
