import React from 'react';
import { Route } from 'react-router-dom';
import { createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Layout from './Layout';
import Home from './components/Home';

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="projects" element={<Projects />} />
            <Route path="contact" element={<Contact />} /> 
        </Route>
    )
);