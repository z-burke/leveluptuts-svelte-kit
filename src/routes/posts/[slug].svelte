<script context="module">
    export async function load({ params }) {
        const Hello = (await import(`../../posts/${params.slug}.md`)).default;
        
        // const post = {
        //     title: params.slug,
        //     date: new Date(),
        //     body: 'lorem ipsum'
        // };
        return {
            props: {
                Hello
            }
        }
    }
</script>

<script>
    // import Hello from '../../posts/hello.md';
    export let Hello;
</script>

<Hello />
