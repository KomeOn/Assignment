import {select, csv} from 'd3';

const svg = select('svg');

const width = +svg.attr('width');
const height = +svg.attr('height');

csv('graph_FD.csv').then(data => {
    console.log(data);
});