describe('Home', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have main screen', async () => {
    await expect(element(by.id('main'))).toBeVisible();
  });
});
