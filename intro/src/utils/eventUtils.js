//Util encargado de la creacion de los eventos yy asignarles su respectiva ID

let eventGuid = 0

export function createEventId() {
  return String(eventGuid++)
}