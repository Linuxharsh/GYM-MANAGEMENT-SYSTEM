export function logAction(action, user) {
  console.log(`[${new Date().toISOString()}] USER:${user} ACTION:${action}`);
}
