// I'll use this function when the component loads to prevent the page from being stuck in the middle
export default function ScrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "instant"
    })
}