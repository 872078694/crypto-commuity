import React from 'react';
import { useRecoilValueLoadable } from 'recoil';
import {
    helloWorldSelector
  } from '../selector/HelloWorldSelector';



export function HelloWorld() {
    const roleResultLoadable = useRecoilValueLoadable(helloWorldSelector);
    switch (roleResultLoadable.state) {
      case 'hasValue':
        return <div>{roleResultLoadable.contents}</div>;
      case 'loading':
        return <div>Loading...</div>;
      case 'hasError':
        return <div>damn...</div>;
    }
  }
  