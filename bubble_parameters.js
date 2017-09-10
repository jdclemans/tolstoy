var BUBBLE_PARAMETERS = {
    "data_file": "tolstoy-data.csv",
    // "map_file": "us.json",
    "report_title": "The Works of Leo Tolstoy",
    "footer_text": "Leo Tolstoy published over 100 works in addition to hundreds of letters and articles.",
    "width": 940,
    "height": 575,
    "force_strength": 0.03,
    "force_type": "charge",
    "radius_field": "Page Count",
    "numeric_fields": ["Asset Value", "Debt", "Year", "Page Count", "Age"],
    "fill_color": {
        "data_field": "Genre",
        "color_groups": {
            // "Fiction": "#3C5663",
            // "Novella": "#9C695B",
            // "Short Story": "#874F65",
            // "Play": "#5C2C1F",
            // "Non-fiction": "#416F55"

            "Fiction": "#FF7542",
            "Novella": "#FFAD42 ",
            "Short Story": "#3E91CC",
            "Play": "#36D38C",
            "Non-fiction": "#4E51D4"

            // "Fiction": "#3E91CC",
            // "Novella": "#FFAD42 ",
            // "Short Story": "#4E51D4 ",
            // "Play": "#36D38C",
            // "Non-fiction": "#FF7542 "
        }
    },
    "tooltip": [
        {"prefix": "","title": "", "data_field": "Genre"},
        {"prefix": "","title": "", "data_field": "Title"},
        
        // {"title": "Asset Value", "data_field": "Asset Value", "format_string": ",.2r"},
        // {"title": "Debt", "data_field": "Debt", "format_string": ",.2r"},
        
        {"prefix": "", "title": " pgs.", "data_field": "Page Count", "format_string": ",.2r"},
        {"prefix": "-", "title": "", "data_field": "Year"}
    ],
    "modes": [
        {
            "button_text": "All Published Works",
            "button_id": "all",
            "type": "grid",
            "labels": null,
            "grid_dimensions": {"rows": 1, "columns": 1},
            "data_field": null
        },
        {
            "button_text": "Genre",
            "button_id": "region",
            "type": "grid",
            "labels": [ "Play", "Novella", "Short Story", "Non-fiction","Fiction"],
            "grid_dimensions": {"rows": 2, "columns": 3},
            "data_field": "Genre"
        },
        // {
        //     "button_text": "Assets by Change in Value",
        //     "button_id": "Change",
        //     "type": "grid",
        //     "labels": ["Down", "No Change", "Up"],
        //     "grid_dimensions": {"rows": 1, "columns": 3},
        //     "data_field": "Change"
        // },
        {
            "button_text": "Timeline",
            "button_id": "change_vs_net_value",
            "type": "scatterplot",
            "x_data_field": "Age",
            "y_data_field": "Page Count"
            ,
            "x_format_string": " "
            // ,
            // "y_format_string": " "
        }
        // ,
        // {
        //     "button_text": "Assets by Location",
        //     "button_id": "assets_on_map",
        //     "type": "map",
        //     "latitude_field": "Latitude",
        //     "longitude_field": "Longitude"
        // }
    ]
};