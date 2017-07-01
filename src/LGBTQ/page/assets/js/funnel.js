data = [
  ["Characters",   525],
  ["Relationships & Romance", 93],
  ["Actions & Locations",  37],
  ["Mentions & Narratives",        30],
  ["Others", 17]
];

var chart = new D3Funnel("#funnel");

var options = {

    // width of the chart; 
    // defaults to container's width (if non-zero)
    width: 350,    
    
    // height of the chart; 
    // defaults to container's height (if non-zero)
    height: 400,

    // The percent of total width the bottom should be
    bottomWidth: 1/3, 
    
    // How many sections to pinch
    bottomPinch: 0,  
    
    // Whether the funnel is curved
    isCurved: false,   
    
    // The curvature amount
    curveHeight: 20,      

    // Either "solid" or "gradient"
    fillType: "solid",    

    // Whether the funnel is inverted
    isInverted: false,  
    
    // Whether the funnel has effects on hover
    hoverEffects: false,  

    // Whether the funnel should calculate the blocks by
    // the count values rather than equal heights
    dynamicArea: false ,  
                          
    label: {

        // Any valid font size
        fontSize: "14px"  
    }
};

chart.draw(data, options);