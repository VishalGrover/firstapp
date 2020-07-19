import React from "react";
import ErrorGeneratingChild from './ErrorGeneratingChild';
import CatchError from './CatchError';

export default class ErrorParent extends React.Component {


  render() {
    return (
        <CatchError>
            <ErrorGeneratingChild name='Vishal' />
            <ErrorGeneratingChild name='' />
        </CatchError>
    );
  }

//  render() {
//      return (
//      <div>
//        <CatchError>
//            <ErrorGeneratingChild name='Vishal' />
//        </CatchError>
//        <CatchError>
//             <ErrorGeneratingChild name='' />
//        </CatchError>
//      </div>
//      );
//    }
}