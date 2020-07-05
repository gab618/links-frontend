import React from 'react';

import Layout from '../../../Layouts/Manage';

function Edit() {
  return (
    <Layout>
      <h1>Edit Link</h1>
      <div>
        <form action="">
          <div className="form-group">
            <label htmlFor="">Label</label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="">Url</label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group form-check">
            <label className="form-check-label">
              <input type="checkbox" name="isSocial" />
              <span className="form-check-sign" />
              Is Social
            </label>
          </div>
          <div>
            <button type="button" className="btn btn-primary btn-round">
              Submit
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
}

export default Edit;
