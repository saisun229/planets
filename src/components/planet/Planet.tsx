import "./Planet.css";
import { planets } from "../../Planets";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";

export default function Planet(props) {
  //list of planets that user has entered
  const generatedPlanets = planets.filter((planet) =>
    props.planets.includes(planet.name.toLowerCase())
  );
  //Sorts planets to, user set input order
  const sortedPlanets = generatedPlanets.sort((a, b) => {
    return (
      props.planets.indexOf(a.name.toLowerCase()) -
      props.planets.indexOf(b.name.toLowerCase())
    );
  });
  //On Drag and drop reorders planets list
  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    const items = Array.from(props.planets);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    props.setPlanets(items);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="planets">
        {(provided) => (
          <section
            className="planet_container"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {sortedPlanets.map((planet, index) => {
              return (
                <Draggable
                  key={planet.id}
                  draggableId={planet.id}
                  index={index}
                >
                  {(provided) => (
                    <article
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                    >
                      <div className="flex planet">
                        <div className="flex-none w-48 relative">
                          <img
                            src={planet.img}
                            alt={planet.alt}
                            className="absolute inset-0 w-full h-full object-cover"
                          />
                        </div>
                        <section className="flex-auto w-100 p-6 planet__text">
                          <div className="flex flex-wrap">
                            <h1 className="flex-auto text-xl font-semibold">
                              {planet.name}
                            </h1>
                          </div>
                        </section>
                      </div>
                    </article>
                  )}
                </Draggable>
              );
            })}
            {provided.placeholder}
          </section>
        )}
      </Droppable>
    </DragDropContext>
  );
}
