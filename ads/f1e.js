/**
 * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {writeScript, validateSrcPrefix} from '../src/3p';

/**
 * @param {!Window} global
 * @param {!Object} data
 */
export function f1e(global, data) {
  checkData(data, ['domain', 'target']);
  var domain = data.domain;
  var target = data.target;
  validateSrcPrefix('https:', domain);
  var rnd = Math.round(Math.random() * 100000000);
  if (!pid) var pid = Math.round(Math.random() * 100000000);
  var url = domain + '/jserver/acc_random=' + rnd + target + '/pageid=' + pid;
  writeScript(global, url)
}
