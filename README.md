Video selector(s) for the Weighing The Evidence exhibit at the Science Museum of Minnesota
These video selectors were created using github.com/scimusmn/video-selector-base.


Assets:
aws s3 sync s3://smm-depot/projects/qmd/0306/ /usr/local/src/qmd-0306-wte-animations/public/


Video selector for the Sports exhibit at the Science Museum of Minnesota

## Exporting content to a file
Start meteor, then from another tab:

    mongoexport --port 3001 --db meteor --collection ExhibitComponents --pretty --jsonArray --out exhibitComponents.json
    mongoexport --port 3001 --db meteor --collection Videos --pretty --jsonArray --out videos.json

## Loading content from the file
Warning, this is destructive.

    meteor reset
    meteor

This will erase everything in your local database and update it with the json
files that are tracked in Git.