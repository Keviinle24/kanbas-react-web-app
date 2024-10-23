import Add from "./Add";
import Square from "./Square";
import Highlight from "./Highlight";
import VariablesAndConstants from "./VariablesAndConstants";
import VariableTypes from "./VariableTypes";
import  BooleanVariables from "./BooleanVariables";
import  IfElse1  from "./IfElse";
import  TernaryOperator  from "./TernaryOperator";
import ConditionalOutputIfElse from "./ConditionalOutputIfElse";
import ConditionalOutputInline from "./ConditionalOutputInline";
import LegacyFunctions from "./LegacyFunctions";
import ArrowFunctions from "./ArrowFunction";
import  ImpliedReturn  from "./ImpliedReturn";
import TemplateLiterals from "./TemplateLiterals";
import SimpleArrays from "./SimpleArrays";
import ArrayIndexAndLength from "./ArrayIndexAndLength";
import AddingAndRemovingToFromArrays from "./AddingAndRemovingToFromArrays";
import ForLoops from "./ForLoops";
import MapFunction from "./MapFunction";
import FindFunction from "./FindFunction";
import FilterFunction from "./FilterFunction";
import JsonStringify from "./JsonStringify";
import TodoItem from "./todos/TodoItem";
import TodoList from "./todos/TodoList";
import Spreading from "./todos/Spreading";
import Destructing from "./Destructing";
import FunctionDestructing from "./FunctionDestructing";
import DestructingImports from "./DestructingImports";
import Classes from "./Classes";
import Styles from "./Styles";
import AddPathParameters from "./AddPathParameters";
import PathParameters from "./PathParameters";

export default function Lab3() {
    console.log('Hello World!');
    return (
      <div id="wd-lab3">
        <h3>JavaScript</h3>
        <VariablesAndConstants/>
        <Add a={3} b={4} />
        <h4>Square of 4</h4>
      <Square>4</Square>
      <hr />
      <Highlight>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitratione eaque illo minus cum, saepe totam
        vel nihil repellat nemo explicabo excepturi consectetur. Modi omnis minus sequi maiores, provident voluptates.
     </Highlight>
    <VariableTypes/>
    <BooleanVariables/>
    <IfElse1/>
    <TernaryOperator/>
    <ConditionalOutputIfElse/>
    <ConditionalOutputInline/>
    <LegacyFunctions/>
    <ArrowFunctions/>
    <ImpliedReturn/>
    <TemplateLiterals/>
    <SimpleArrays/>
    <ArrayIndexAndLength/>
    <AddingAndRemovingToFromArrays/>
    <ForLoops/>
    <MapFunction/>
    <FindFunction/>
    <FilterFunction/>
    <JsonStringify/>
    <TodoItem/>
    <TodoList/>
    <Spreading/>
    <Destructing/>
    <FunctionDestructing/>
    <DestructingImports/>
    <Classes/>
    <Styles/>
    <AddPathParameters/>
    <PathParameters/>
    


      </div>
    );
  }
  