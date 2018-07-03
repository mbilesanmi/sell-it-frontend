/* eslint-disable jsx-a11y/label-has-for  */
/* eslint-disable react/prop-types */
import React from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

const AdminViewYardsale = ({ handleSelectChange, users, value, yardsale }) => (
  <div className="col-md-9 col-md-push-3">
    <div className="row">
      <div>
        <form className="col-lg-10 col-lg-push-1">
          <div className="title-group">
            <h1 className="title">{yardsale.name} yard sale</h1>
            <hr />
          </div>
          <div className="form-group">
            <label>Yardsale Department</label>
            <input
              type="text"
              name="department"
              className="form-control"
              value={yardsale.name}
              placeholder="e.g 'operations' for Operations yardsale"
              readOnly
            />
          </div>

          <div className="form-group">
            <label>Description</label>
            <textarea
              name="description"
              className="form-control"
              value={yardsale.description}
              rows="5"
              required
            />
          </div>

          <div className="form-group">
            <label>Terms and Conditions</label>
            <textarea
              name="t_and_c"
              className="form-control"
              value={yardsale.t_and_c}
              rows="5"
              required
            />
          </div>


          <div className="form-group">
            <label>Yardsale Administrators</label>
            <Select
              className="react-select-field"
              closeOnSelect={false}
              disabled={false}
              multi
              name="yardsale_admins"
              onChange={handleSelectChange}
              options={users}
              removeSelected={false}
              rtl={false}
              simpleValue
              value={value}
            />
          </div>

          <div className="form-group">
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <div className="row">
                  <label>Yardsale Start</label>
                </div>
                <div className="row">
                  <input
                    type="date"
                    name="yardsale_date"
                    className="col-sm-12 col-md-8 inline form-control"
                    value={yardsale.start_date}
                    required
                  />
                  <input
                    type="time"
                    name="yardsale_time"
                    className="col-sm-12 col-md-4 inline form-control"
                    value={yardsale.start_time}
                    required
                  />
                </div>
              </div>

              <div className="col-sm-12 col-md-6">
                <label>Yardsale End</label>
                <div className="row">
                  <input
                    type="date"
                    name="yardsale_date"
                    className="col-sm-12 col-md-8 inline form-control"
                    value={yardsale.end_date}
                    required
                  />
                  <input
                    type="time"
                    name="yardsale_time"
                    className="col-sm-12 col-md-4 inline form-control"
                    value={yardsale.end_time}
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="form-group">
            <div className="row">
              <div className="col-sm-12 col-md-3 insert-margin-right">
                <div className="row">
                  <label>Yardsale Location *</label>
                </div>
                <div className="row">
                  <select
                    className="form-control"
                    name="location"
                    value={yardsale.location}
                  >
                    <option>-</option>
                    <option value="lagos">Lagos</option>
                    <option value="nairobi">Nairobi</option>
                    <option value="kampala">Kampala</option>
                    <option value="new york">New York</option>
                  </select>
                </div>
              </div>

              <div className="col-sm-12 col-md-2">
                <div className="row">
                  <label>Buyer Limit</label>
                </div>
                <div className="row">
                  <input
                    type="number"
                    name=""
                    className="form-control"
                    min="1"
                    value={yardsale.buyer_limit}
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="form-group clearfix form-action">
            <button
              type="submit"
              className="btn btn-primary pull-left min-width"
            >
              Save Yardsale
            </button>
          </div>
        </form>
      </div>
    </div>
    {/* <div className="mb50" /> */}
  </div>
);

export default AdminViewYardsale;