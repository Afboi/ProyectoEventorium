//Utility in charge of creating events and assigning them their respective IDs

let eventGuid = 0

export function createEventId() {
  return String(eventGuid++)
}