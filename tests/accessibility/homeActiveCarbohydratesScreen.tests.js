var homeActiveCarbohydratesScreen = (test) => {
    var screen;
    var homeScreen;
    beforeAll(async () => {
        homeScreen = await test.OpenHomeScreen();
        screen = await homeScreen.OpenActiveCarbohydratesChart();
    });
    afterAll(async () => {
        await screen.Back();
    });
    it('has a header', async () => {
        await expect(screen.Header()).toExist();
    });
    it('has a COB Label', async () => {
        await expect(screen.COBLabel()).toExist();
    });
    it('has a Total Label', async () => {
        await expect(screen.TotalLabel()).toExist();
    });
    it('has an Glucose Change Label', async () => {
        await expect(screen.GlucoseChangeLabel()).toExist();
    });
    it('has a Observed Label', async () => {
        await expect(screen.ObservedLabel()).toExist();
    });
    it('has a Predicted Label', async () => {
        await expect(screen.PredictedLabel()).toExist();
    });
    it('has a Back Button', async () => {
        await expect(screen.BackButton()).toExist();
    });
};

module.exports = {
    homeActiveCarbohydratesScreen
};
