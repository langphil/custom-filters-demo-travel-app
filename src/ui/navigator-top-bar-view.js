/*
 * Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

define(["mobileui/views/layout-view",
        "mobileui/views/layout-params",
        "mobileui/ui/button-view"],
function(LayoutView, LayoutParams, ButtonView) {

    var NavigatorTopBarView = LayoutView.extend({
        initialize: function() {
            NavigatorTopBarView.__super__.initialize.call(this);
            this.bounds().setHeight(NavigatorTopBarView.height);
            this.setParams(new LayoutParams().matchParentWidth());
            this.setLayout("horizontal");
        },

        render: function() {
            this.$el.addClass("js-navigator-top-bar-view");
            return NavigatorTopBarView.__super__.render.call(this);
        }
    });

    _.extend(NavigatorTopBarView, {
        height: 50
    });

    return NavigatorTopBarView;
});