import { useEffect, useLayoutEffect, useState } from "react";

const parent = "%c[Component Pai]:";
const componentName = (name) => `%c[Component ${name}]:`;

const parentColor = "color:black; background-color: orange";
const componentColor = (color) => `color:black; background-color: ${color}`;

const lazyInitializer = "%c lazy initializer";

const useLayoutEffectEmpetyArray = "%c useLayoutEffect(() => {}, []";
const useLayoutEffectWithArray = (value) =>
  `%c useLayoutEffect(() => {}, [${value}]`;

const useEffectWithoutArray = "%c useEffect(() => {})";
const useEffectEmpetyArray = "%c useEffect(() => {}, []";
const useEffectWithArray = (value) => `%c useEffect(() => {}, [${value}]`;

const lazyInitializerColor = "color: red";

const useLayoutEffectEmpetyArrayColor = "color: pink";
const useLayoutEffectWithArrayColor = "color: DarkMagenta";

const useEffectWithoutArrayColor = "color: ForestGreen";
const useEffectEmpetyArrayColor = "color: steelblue";
const useEffectWithArrayColor = "color: GoldenRod";

console.log("%cServer Side", "color:red");

function Component({ name, color, children }) {
  console.log(`%cComponent - ${name}`, `color: ${color}`);

  const [counter1, setCounter1] = useState(() => {
    console.log(
      `${componentName(name)}${lazyInitializer} - counter1`,
      componentColor(color),
      lazyInitializerColor
    );
    return 0;
  });
  const [counter2, setCounter2] = useState(() => {
    console.log(
      `${componentName(name)}${lazyInitializer} - counter2`,
      componentColor(color),
      lazyInitializerColor
    );
    return 0;
  });

  useLayoutEffect(() => {
    console.log(
      `${componentName(name)}${useLayoutEffectEmpetyArray}`,
      componentColor(color),
      useLayoutEffectEmpetyArrayColor
    );

    return () => {
      console.log(
        `${componentName(name)}${useLayoutEffectEmpetyArray} - clean up`,
        componentColor(color),
        useLayoutEffectEmpetyArrayColor
      );
    };
  }, []);

  useLayoutEffect(() => {
    console.log(
      `${componentName(name)}${useLayoutEffectWithArray("counter1")}`,
      componentColor(color),
      useLayoutEffectWithArrayColor
    );

    return () => {
      console.log(
        `${componentName(name)}${useLayoutEffectWithArray(
          "counter1"
        )} - clean up`,
        componentColor(color),
        useLayoutEffectWithArrayColor
      );
    };
  }, [counter1]);

  useLayoutEffect(() => {
    console.log(
      `${componentName(name)}${useLayoutEffectWithArray("counter2")}`,
      componentColor(color),
      useLayoutEffectWithArrayColor
    );

    return () => {
      console.log(
        `${componentName(name)}${useLayoutEffectWithArray(
          "counter2"
        )} - clean up`,
        componentColor(color),
        useLayoutEffectWithArrayColor
      );
    };
  }, [counter2]);

  // Sem Array dependências
  useEffect(() => {
    console.log(
      `${componentName(name)}${useEffectWithoutArray}`,
      componentColor(color),
      useEffectWithoutArrayColor
    );

    return () =>
      console.log(
        `${componentName(name)}${useEffectWithoutArray} - clean up`,
        componentColor(color),
        useEffectWithoutArrayColor
      );
  });

  // Array de dependências vazio []
  useEffect(() => {
    console.log(
      `${componentName(name)}${useEffectEmpetyArray}`,
      componentColor(color),
      useEffectEmpetyArrayColor
    );

    return () =>
      console.log(
        `${componentName(name)}${useEffectEmpetyArray} - clean up`,
        componentColor(color),
        useEffectEmpetyArrayColor
      );
  }, []);

  // Array de dependências com uma dependência [counter]
  useEffect(() => {
    console.log(
      `${componentName(name)}${useEffectWithArray("counter1")}`,
      componentColor(color),
      useEffectWithArrayColor
    );

    return () => {
      console.log(
        `${componentName(name)}${useEffectWithArray("counter1")} - clean up`,
        componentColor(color),
        useEffectWithArrayColor
      );
    };
  }, [counter1]);

  useEffect(() => {
    console.log(
      `${componentName(name)}${useEffectWithArray("counter2")}`,
      componentColor(color),
      useEffectWithArrayColor
    );

    return () => {
      console.log(
        `${componentName(name)}${useEffectWithArray("counter2")} - clean up`,
        componentColor(color),
        useEffectWithArrayColor
      );
    };
  }, [counter2]);

  console.log(`%cComponent - ${name} - before return <div>`, `color: ${color}`);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        border: "solid",
        padding: "8px"
      }}
    >
      <h3>Component - {name}</h3>
      <span>Counter1: {counter1}</span>
      <button
        onClick={() => {
          console.log("onClick - Counter 1");
          setCounter1((prev) => prev + 1);
        }}
      >
        +
      </button>
      <span>Counter2: {counter2}</span>
      <button
        onClick={() => {
          console.log("onClick - Counter 2");
          setCounter2((prev) => prev + 1);
        }}
      >
        +
      </button>
      <ChildComponent name={`${name} - Child`} color="purple" prop={counter2} />
      {children}
    </div>
  );
}

function ChildComponent({ name, color, prop, children }) {
  console.log(`%cComponent - ${name} - prop: ${prop}`, `color: ${color}`);

  const [counter1, setCounter1] = useState(() => {
    console.log(
      `${componentName(name)}${lazyInitializer} - counter1`,
      componentColor(color),
      lazyInitializerColor
    );
    return 0;
  });
  const [counter2, setCounter2] = useState(() => {
    console.log(
      `${componentName(name)}${lazyInitializer} - counter2`,
      componentColor(color),
      lazyInitializerColor
    );
    return 0;
  });

  useLayoutEffect(() => {
    console.log(
      `${componentName(name)}${useLayoutEffectEmpetyArray}`,
      componentColor(color),
      useLayoutEffectEmpetyArrayColor
    );

    return () => {
      console.log(
        `${componentName(name)}${useLayoutEffectEmpetyArray} - clean up`,
        componentColor(color),
        useLayoutEffectEmpetyArrayColor
      );
    };
  }, []);

  useLayoutEffect(() => {
    console.log(
      `${componentName(name)}${useLayoutEffectWithArray("counter1")}`,
      componentColor(color),
      useLayoutEffectWithArrayColor
    );

    return () => {
      console.log(
        `${componentName(name)}${useLayoutEffectWithArray(
          "counter1"
        )} - clean up`,
        componentColor(color),
        useLayoutEffectWithArrayColor
      );
    };
  }, [counter1]);

  useLayoutEffect(() => {
    console.log(
      `${componentName(name)}${useLayoutEffectWithArray("counter2")}`,
      componentColor(color),
      useLayoutEffectWithArrayColor
    );

    return () => {
      console.log(
        `${componentName(name)}${useLayoutEffectWithArray(
          "counter2"
        )} - clean up`,
        componentColor(color),
        useLayoutEffectWithArrayColor
      );
    };
  }, [counter2]);

  // Sem Array dependências
  useEffect(() => {
    console.log(
      `${componentName(name)}${useEffectWithoutArray}`,
      componentColor(color),
      useEffectWithoutArrayColor
    );

    return () =>
      console.log(
        `${componentName(name)}${useEffectWithoutArray} - clean up`,
        componentColor(color),
        useEffectWithoutArrayColor
      );
  });

  // Array de dependências vazio []
  useEffect(() => {
    console.log(
      `${componentName(name)}${useEffectEmpetyArray}`,
      componentColor(color),
      useEffectEmpetyArrayColor
    );

    return () =>
      console.log(
        `${componentName(name)}${useEffectEmpetyArray} - clean up`,
        componentColor(color),
        useEffectEmpetyArrayColor
      );
  }, []);

  // Array de dependências com uma dependência [counter]
  useEffect(() => {
    console.log(
      `${componentName(name)}${useEffectWithArray("counter1")}`,
      componentColor(color),
      useEffectWithArrayColor
    );

    return () => {
      console.log(
        `${componentName(name)}${useEffectWithArray("counter1")} - clean up`,
        componentColor(color),
        useEffectWithArrayColor
      );
    };
  }, [counter1]);

  useEffect(() => {
    console.log(
      `${componentName(name)}${useEffectWithArray("counter2")}`,
      componentColor(color),
      useEffectWithArrayColor
    );

    return () => {
      console.log(
        `${componentName(name)}${useEffectWithArray("counter2")} - clean up`,
        componentColor(color),
        useEffectWithArrayColor
      );
    };
  }, [counter2]);

  console.log(`%cComponent - ${name} - before return <div>`, `color: ${color}`);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        border: "solid",
        padding: "8px"
      }}
    >
      <h3>
        Component - {name} - prop: {prop}
      </h3>
      <span>Counter1: {counter1}</span>
      <button
        onClick={() => {
          console.log("onClick - Counter 1");
          setCounter1((prev) => prev + 1);
        }}
      >
        +
      </button>
      <span>Counter2: {counter2}</span>
      <button
        onClick={() => {
          console.log("onClick - Counter 2");
          setCounter2((prev) => prev + 1);
        }}
      >
        +
      </button>
      {children}
    </div>
  );
}

export default function Dashboard() {
  const [state, setState] = useState(() => {
    console.log(
      `${parent}${lazyInitializer}`,
      parentColor,
      lazyInitializerColor
    );

    return false;
  });

  useLayoutEffect(() => {
    console.log(
      `${parent}${useLayoutEffectEmpetyArray}`,
      parentColor,
      useLayoutEffectEmpetyArrayColor
    );

    return () => {
      console.log(
        `${parent}${useLayoutEffectEmpetyArray} - clean up`,
        parentColor,
        useLayoutEffectEmpetyArrayColor
      );
    };
  }, []);

  useLayoutEffect(() => {
    console.log(
      `${parent}${useLayoutEffectWithArray("state")}`,
      parentColor,
      useLayoutEffectWithArrayColor
    );

    return () => {
      console.log(
        `${parent}${useLayoutEffectWithArray("state")} - clean up`,
        parentColor,
        useLayoutEffectWithArrayColor
      );
    };
  }, [state]);

  // Sem Array dependências
  useEffect(() => {
    console.log(
      `${parent}${useEffectWithoutArray}`,
      parentColor,
      useEffectWithoutArrayColor
    );

    return () =>
      console.log(
        `${parent}${useEffectWithoutArray} - clean up`,
        parentColor,
        useEffectWithoutArrayColor
      );
  });

  // Array de dependências vazio []
  useEffect(() => {
    console.log(
      `${parent}${useEffectEmpetyArray}`,
      parentColor,
      useEffectEmpetyArrayColor
    );

    return () =>
      console.log(
        `${parent}${useEffectEmpetyArray} - clean up`,
        parentColor,
        useEffectEmpetyArrayColor
      );
  }, []);

  // Array de dependências com uma dependência [state]
  useEffect(() => {
    console.log(
      `${parent}${useEffectWithArray("state")}`,
      parentColor,
      useEffectWithArrayColor
    );

    return () => {
      console.log(
        `${parent}${useEffectWithArray("state")} - clean up`,
        parentColor,
        useEffectWithArrayColor
      );
    };
  }, [state]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "4px"
      }}
    >
      <h2>Dashboard</h2>

      <button onClick={() => setState(!state)}>Update state</button>

      {state && (
        <>
          <Component name="child1" color="green">
            <Component name="grandson" color="pink" />
          </Component>
          <Component name="child2" color="blue" />
        </>
      )}
    </div>
  );
}
