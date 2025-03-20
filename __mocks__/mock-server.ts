// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { setupServer } from "msw/node";

const mockServer = setupServer();

export default mockServer;
