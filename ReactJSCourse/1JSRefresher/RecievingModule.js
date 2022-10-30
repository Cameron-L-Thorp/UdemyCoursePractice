import person from './ExportingModule.js'

//These are imported explicitly and independently based on the export name from the exporting file
import { exportNumber } from './ExplicitExporting.js'

import {Age as camAge} from './ExplicitExporting.js'

//You can also import * as [name] in order to create [name] as an object and access the imports as if they were properties