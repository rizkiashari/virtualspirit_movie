import "@testing-library/jest-dom/extend-expect";

import mockServer from "./__mocks__/mock-server";

Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
    })),
});

beforeAll(() => {
    // Enable the mocking in tests.
    mockServer.listen();
});

afterEach(() => {
    // Reset any runtime handlers tests may use.
    mockServer.resetHandlers();
});

afterAll(() => {
    // Clean up once the tests are done.
    mockServer.close();
});
