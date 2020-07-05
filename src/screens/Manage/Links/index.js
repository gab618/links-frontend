import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { linkList, setLinkToRemove } from '../../../actions/LinkActions';

import Layout from '../../Layouts/Manage/index';

function Links({ links, linkList, linkToRemove, setLinkToRemove }) {
  useEffect(() => {
    linkList();
  }, [linkList]);

  return (
    <Layout>
      <div className="row">
        <div className="col">
          <h1>Links</h1>
        </div>
        <div className="col text-right align-self-bottom pt-2">
          <Link to="/manage/links/create" className="btn btn-primary">
            Add
          </Link>
        </div>
      </div>

      {links && links.length
        ? links.map((l) => {
            const deleteClick = (e) => setLinkToRemove(l);
            const border =
              linkToRemove && linkToRemove.id === l.id
                ? 'border border-danger rounded'
                : 'border border-transparent';
            return (
              <div
                key={l.id}
                className={`pb-2 pt-2 pl-3 pr-3 d-flex flex-row justify-content-between ${border}`}
              >
                <div className="pr-3">
                  <img src="https://via.placeholder.com/100" alt="Link icon" />
                </div>
                <div className="align-self-center">
                  <span className="text-primary clearfix">{l.label}</span>
                  <span className="text-primary clearfix">{l.url}</span>
                </div>
                <div className="ml-auto p-2 clearfix">
                  <Link to={`/manage/links/edit/${l.id}`}>
                    <span>Edit</span>
                  </Link>
                  <button
                    type="button"
                    className="btn btn-clear"
                    onClick={deleteClick}
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })
        : null}
    </Layout>
  );
}

const mapStateToProps = (state) => {
  return {
    links: state.link.links,
    linkToRemove: state.link.linkToRemove,
  };
};

export default connect(mapStateToProps, { linkList, setLinkToRemove })(Links);
