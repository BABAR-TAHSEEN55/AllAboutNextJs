const Reviews = async () => {
    await new Promise((r) => {
        setTimeout(() => {
            r("Resolved");
        }, 6000);
    });
    return <div>BEST Reviews</div>;
};

export default Reviews;
