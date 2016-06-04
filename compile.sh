#!/bin/bash

lessc css/shop_mob.less > css/shop_mob.css

jade -P shop.jade
jade -P shop1.jade