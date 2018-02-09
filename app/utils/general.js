module.exports = {
    scrollDown: () => {
        const target = document.getElementsByTagName('body')[0].scrollHeight;
        window.scrollBy({
            top: target,
            left: 0,
            behavior: 'smooth',
        });
    },
};
